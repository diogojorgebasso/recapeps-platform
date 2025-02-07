import { useRef, useState } from "react";
import {
    Box,
    Button,
    HStack,
    VStack,
    Text,
    SimpleGrid
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "../ui/menu";

import {
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
    PopoverArrow
} from "@/components/ui/popover"

export default function CreateNote() {
    const editorRef = useRef<HTMLDivElement>(null);
    const [content, setContent] = useState<string>("");
    const [rows, setRows] = useState<number>(1);
    const [cols, setCols] = useState<number>(1);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);

    const toggleBold = () => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount < 1) return;
        console.log(selection);

        const range = selection.getRangeAt(0);
        if (range.collapsed) return;
        console.log(range);

        if (isBold) {
            // Remove bold
            const boldElement = range.commonAncestorContainer.parentElement;
            if (boldElement?.tagName.toLowerCase() === "strong") {
                const parent = boldElement.parentNode;
                while (boldElement.firstChild) {
                    parent?.insertBefore(boldElement.firstChild, boldElement);
                }
                parent?.removeChild(boldElement);
            }
        } else {
            // Apply bold
            const selectedContent = range.extractContents();
            const strong = document.createElement("strong");
            strong.appendChild(selectedContent);
            range.insertNode(strong);
        }

        setIsBold(!isBold);
        selection.removeAllRanges();
        updateContent();
    };

    const toggleItalic = () => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount < 1) return;

        const range = selection.getRangeAt(0);
        if (range.collapsed) return;

        const parentElement = range.commonAncestorContainer.parentElement;
        const isCurrentlyItalic = parentElement?.closest('em') !== null;

        if (isCurrentlyItalic) {
            // Remove italic
            const italicElement = parentElement?.closest('em');
            if (italicElement) {
                const parent = italicElement.parentNode;
                while (italicElement.firstChild) {
                    parent?.insertBefore(italicElement.firstChild, italicElement);
                }
                parent?.removeChild(italicElement);
            }
        } else {
            // Apply italic
            const selectedContent = range.extractContents();
            const em = document.createElement("em");
            em.appendChild(selectedContent);
            range.insertNode(em);

            // Update the selection to include the newly created element
            const newRange = document.createRange();
            newRange.selectNodeContents(em);
            selection.removeAllRanges();
            selection.addRange(newRange);
        }

        setIsItalic(!isCurrentlyItalic);
        updateContent();
    };


    // Insertion d'image convertie en base64 inline
    const handleImageInsert = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = () => {
            const file = input.files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result as string;
                const selection = window.getSelection();
                if (!selection) return;

                const image = document.createElement("img");
                image.src = base64;
                image.style.maxWidth = "100%";

                // Insert image at caret or replace selection
                if (selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    range.insertNode(image);
                }

                // Update state
                if (editorRef.current) {
                    setContent(editorRef.current.innerHTML);
                }
            };
            reader.readAsDataURL(file);
        };
        input.click();
    };

    // Insère un tableau en demandant le nombre de lignes et de colonnes
    const finalizeTable = () => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount < 1) return;

        const table = document.createElement("table");
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";

        for (let i = 0; i < rows; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < cols; j++) {
                const td = document.createElement("td");
                td.innerHTML = "&nbsp;";
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        const range = selection.getRangeAt(0);
        range.insertNode(table);

        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
        }
    };
    // Insère un embed (par exemple, une vidéo YouTube)
    const handleEmbedInsert = () => {
        const url = prompt("URL de l'embed (ex: https://www.youtube.com/embed/EXEMPLE)");
        if (!url) return;

        const selection = window.getSelection();
        if (!selection || selection.rangeCount < 1) return;

        // Cria o elemento iframe
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = url;
        iframe.allowFullscreen = true;

        // Insere o iframe no local da seleção
        const range = selection.getRangeAt(0);
        range.insertNode(iframe);

        // Atualiza o estado com o HTML do editor
        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
        }
    };

    const insertHeading = (level: number) => {
        const selection = window.getSelection();
        if (!selection || !selection.rangeCount) return;
        const range = selection.getRangeAt(0);

        // For simplicity, just wraps the entire selected text in <hX>
        const selectedContents = range.extractContents();
        const heading = document.createElement(`h${level}`);
        heading.appendChild(selectedContents);
        range.insertNode(heading);

        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
        }
    };

    const handleOrderedListInsert = () => {
        const itemsCount = prompt("Nombre d'items pour la liste ordonnée", "3");
        if (!itemsCount) return;

        const count = parseInt(itemsCount, 10);
        const ol = document.createElement("ol");

        for (let i = 0; i < count; i++) {
            const li = document.createElement("li");
            li.innerHTML = "&nbsp;";
            ol.appendChild(li);
        }

        const selection = window.getSelection();
        if (!selection || selection.rangeCount < 1) return;

        const range = selection.getRangeAt(0);
        range.insertNode(ol);

        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
        }
    };

    const handleUnorderedListInsert = () => {
        const itemsCount = prompt("Nombre d'items pour la liste non ordonnée", "3");
        if (!itemsCount) return;

        const count = parseInt(itemsCount, 10);
        const ul = document.createElement("ul");

        for (let i = 0; i < count; i++) {
            const li = document.createElement("li");
            li.innerHTML = "&nbsp;";
            ul.appendChild(li);
        }

        const selection = window.getSelection();
        if (!selection || selection.rangeCount < 1) return;

        const range = selection.getRangeAt(0);
        range.insertNode(ul);

        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
        }
    };

    const applyColor = (color: string) => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount < 1) return;
        const range = selection.getRangeAt(0);
        if (range.collapsed) return;

        // Extrai o conteúdo selecionado
        const selectedContent = range.extractContents();

        // Cria um <span> com a cor desejada
        const coloredSpan = document.createElement("span");
        coloredSpan.style.color = color;
        coloredSpan.appendChild(selectedContent);

        // Insere o span no local selecionado
        range.insertNode(coloredSpan);

        // Atualiza o estado do editor
        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
        }
    };

    // Met à jour l'état avec le contenu actuel de l'éditeur
    const updateContent = () => {
        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
        }
    };

    // Envoie le contenu vers Firebase et réinitialise l'éditeur
    const handleSubmit = async () => {
        const noteData = {
            content,
            createdAt: new Date(),
        };
        try {
            await addDoc(collection(db, "adsubjects/math/notes/v1"), noteData);
            if (editorRef.current) {
                editorRef.current.innerHTML = "";
            }
            setContent("");
            console.log("Article envoyé avec succès !");
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'article :", error);
        }
    };

    let maxRows = 8;
    let maxCols = 8;

    return (
        <VStack w="full" gap={4}>
            {/* Barre d'outils de formatage */}
            <HStack wrap="wrap" gap={2}>
                <Button variant={isBold ? "solid" : "ghost"} onClick={toggleBold}>Gras</Button>
                <Button variant={isItalic ? "solid" : "ghost"} onClick={toggleItalic}>Italique</Button>
                <Button onClick={handleImageInsert}>Insérer Image</Button>
                <PopoverRoot lazyMount unmountOnExit={true}>
                    <PopoverTrigger asChild>
                        <Button>Inserir Tabela</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                            <SimpleGrid columns={maxCols}>
                                {Array.from({ length: maxRows }, (_, r) =>
                                    Array.from({ length: maxCols }, (_, c) => {
                                        const rowIndex = r + 1;
                                        const colIndex = c + 1;
                                        const isHighlighted =
                                            rowIndex <= rows && colIndex <= cols;
                                        return (
                                            <Box
                                                key={`${r}-${c}`}
                                                w={5}
                                                h={5}
                                                border="1px solid #ccc"
                                                bg={isHighlighted ? "blue.200" : "gray.50"}
                                                onMouseEnter={() => {
                                                    setRows(rowIndex);
                                                    setCols(colIndex);
                                                }}
                                                onClick={() => {
                                                    finalizeTable();
                                                }}
                                            />
                                        );
                                    })
                                )}
                            </SimpleGrid>
                            <Text mt={2} fontSize="sm">
                                {rows} × {cols}
                            </Text>
                        </PopoverBody>
                    </PopoverContent>
                </PopoverRoot>

                <Button onClick={handleEmbedInsert}>Insérer Embed</Button>
                <Button onClick={handleUnorderedListInsert}>
                    Liste non Ordonnée
                </Button>
                <Button onClick={handleOrderedListInsert}>
                    Liste Ordonnée
                </Button>

                <MenuRoot>
                    <MenuTrigger asChild>
                        <Button>Couleur du Texte</Button>
                    </MenuTrigger>

                    <MenuContent>
                        <MenuItem value="noir" onClick={() => applyColor("#000000")}>
                            Noir
                        </MenuItem>
                        <MenuItem value="rouge" onClick={() => applyColor("#ff0000")}>
                            Rouge
                        </MenuItem>
                        <MenuItem value="vert" onClick={() => applyColor("#008000")}>
                            Vert
                        </MenuItem>
                        <MenuItem value="bleu" onClick={() => applyColor("#0000ff")}>
                            Bleu
                        </MenuItem>
                        <MenuItem value="orange" onClick={() => applyColor("#ffaa00")}>
                            Orange
                        </MenuItem>
                    </MenuContent>
                </MenuRoot>
                {/* Menu des Titres */}
                <MenuRoot>
                    <MenuTrigger asChild>
                        <Button>Titres</Button>
                    </MenuTrigger>
                    <MenuContent>
                        <MenuItem value="titre-1" onClick={() => insertHeading(1)}>Titre 1</MenuItem>
                        <MenuItem value="titre-2" onClick={() => insertHeading(2)}>Titre 2</MenuItem>
                        <MenuItem value="titre-3" onClick={() => insertHeading(3)}>Titre 3</MenuItem>
                        <MenuItem value="titre-4" onClick={() => insertHeading(4)}>Titre 4</MenuItem>
                        <MenuItem value="titre-5" onClick={() => insertHeading(5)}>Titre 5</MenuItem>
                        <MenuItem value="titre-6" onClick={() => insertHeading(6)}>Titre 6</MenuItem>
                    </MenuContent>
                </MenuRoot>
            </HStack>

            {/* Éditeur Rich Text */}
            <Box
                ref={editorRef}
                contentEditable
                borderWidth={1}
                borderRadius="md"
                p={4}
                minH="60vh"
                w="full"
                onInput={updateContent}
            />
            <Button colorScheme="blue" onClick={handleSubmit}>
                Publie le Fiche de Révision
            </Button>
        </VStack>
    );
}
