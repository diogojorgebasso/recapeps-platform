import { Button, HStack, Input, Text } from "@chakra-ui/react";
import { getAllOral } from "@/api/getAllOral"
import { useState, useEffect } from "react"

export default function Oral() {
    const [oral, setOral] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        getAllOral().then(data => setOral(data));
    }, []);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredOral = searchText.trim()
        ? oral.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        )
        : oral;

    return (
        <div>
            <h1>Entraine-toi à l'Oral 3</h1>
            <Text>Nous enregistrerons jusq'a les trois premieres minutes de ton gravation.</Text>

            <HStack>
                <Button>Aleatorie</Button>
                <Button>Liste de tout les oral</Button>
            </HStack>

            <Input
                placeholder="Rechercher un oral"
                value={searchText}
                onChange={handleSearchChange}
            />

            {filteredOral.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                </div>
            ))}

        </div>
    )
}