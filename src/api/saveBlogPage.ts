import { collection, addDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";

export async function saveBlogPage() {
  const sport_scolaire = {
    title: "Sport scolaire",
    exam: "Écrit 1",
    item: "Transmettre et adapter",
    gradientFrom: "blue.500",
    gradientTo: "red.400",
    content: {
      sections: [
        {
          title: "I. Accroche",
          bgColor: "blue.100",
          content: [
            {
              text: "Le sport scolaire est le trait d’union entre la culture sportive développée dans la société française et le milieu scolaire ⟶ pose le problème de l’orthodoxie scolaire au regard de la culture, les valeurs et des transformations associées.",
              citation: "Delaplace, 1989",
            },
          ],
        },
        {
          title: "II. Définitions",
          bgColor: "blue.200",
          content: [
            {
              text: "L’évolution du sport scolaire avec l’intégration des pratiques sportives qui se développent dans la société et la quête d’une légitimité scolaire est conforme à la trajectoire de l’EP à cette période.",
              citation: "Création de l’OSU, 1934",
            },
          ],
        },
        {
          title: "III. Proposition de plan",
          bgColor: "blue.300",
          content: [
            {
              text: "Les périodes clés de l’évolution du sport scolaire.",
            },
          ],
          table: {
            headers: ["1918 - 1962", "1962 - 1981", "1981 - 2025"],
            rows: [
              {
                column1:
                  "L’AS a une place importante, elle gagne en renommée et en notoriété avec sa vision élitiste.",
                column2:
                  "L’AS occupe à nouveau une place importante, mais son rôle est différent : il est plus éducatif et moins sportif. On a donc une place qui devient complémentaire à l’EPS.",
                column3:
                  "L’AS trouve une place affirmée dans le projet d’établissement, et participe ainsi à la vie scolaire des élèves.",
              },
              {
                column1:
                  "Freins au développement du sport scolaire : Critique des valeurs ludiques et de divertissement + accès réservé à l’élite.",
                column2:
                  "L’AS en difficulté : trop cher par rapport au nombre de licenciés, ce qui entraîne une baisse d’effectif et une place qui tend à se retirer.",
                column3:
                  "L’AS a du mal à recruter des élèves, sa place n’est pas la même selon les publics et les établissements, de même que son rôle, place toujours bancale.",
              },
            ],
          },
        },
      ],
    },
    ctaLink: "/quizz/ecrit-1/sport-scolaire",
  };

  const mixite_sexuee = {
    title: "Mixité sexuée",
    exam: "Écrit 1",
    item: "Transmettre et adapter",
    gradientFrom: "blue.500",
    gradientTo: "red.400",
    content: {
      sections: [
        {
          title: "Accroches",
          bgColor: "blue.100",
          content: [
            {
              text: "« Tant que l'école restera indifférente aux différences des élèves, beaucoup d'élèves resteront indifférents à l'école ».",
              citation:
                "L. Legrand, Pour un collège démocratique, La documentation française, 1982",
            },
            {
              text: "« Les écoles, les collèges et les lycées contribuent à favoriser la mixité et l’égalité entre les hommes et les femmes ».",
              citation: "Article 5 de la loi Fillon du 23 mai 2008",
            },
          ],
        },
        {
          title: "II. Définitions",
          bgColor: "blue.200",
          content: [
            {
              heading: "Mixité",
              text: "« Fait de dispenser un enseignement commun à un groupe de garçons et de filles dans le but de leur permettre de s’approprier une culture commune tout en reconnaissant la place et les caractéristiques de chacun ».",
              citation: "Lamotte, PUF 2005",
            },
            {
              text: "« Le fait d’éduquer les filles et les garçons ensemble ».",
              citation:
                "Thierry Terret, Cogérino, Pratiques et représentations de la mixité en EPS, Paris, Editions Revue EPS de 2006",
            },
          ],
        },
      ],
    },
    ctaLink: "/quizz/ecrit-1/la-mixite-sexuee",
  };

  const les_emotions = {
    title: "Les émotions",
    exam: "Écrit 2",
    item: "Comprendre, s'exprimer",
    content: {
      sections: [
        {
          title: "I. Accroches",
          bgColor: "blue.100",
          content: [
            {
              text: "« Le professeur ne tient pas suffisamment compte des émotions véhiculées et générées par les APSA »",
              citation:
                "Gagnaire & Lavie, Cultiver les émotions des élèves en EPS, 2005",
            },
            {
              text: "« Rares sont les disciplines qui sollicitent une telle implication émotionnelle : c’est là un phénomène que les enseignants ne peuvent ignorer »",
              citation:
                "Gagnaire & Lavie, Cultiver les émotions des élèves en EPS, 2005",
            },
          ],
        },
        {
          title: "II. Définitions",
          bgColor: "blue.200",
          content: [
            {
              text: "« État affectif multidimensionnel qui s’accompagne de manifestations physiologiques, cognitives, expressives et subjectives. »",
              citation: "Christophe, Les émotions, Savoir Mieux, 1998",
            },
            {
              text: "« Ces mouvements de l’âme sont souvent déclenchés par des événements ou des objets qui affectent l’âme sans que la personne en question les ait recherchés. Ils ne sont pas directement soumis à la volonté ; ils s’imposent : des impulsions, des actions, des pensées, des sentiments. »",
              citation:
                "Tcherkassof, Nico, Frijda, Les émotions : une conception relationnelle, 2014",
            },
          ],
        },
      ],
    },
    ctaLink: "/quizz/ecrit-2/les-emotions",
  };
  console.log(mixite_sexuee, les_emotions);
  try {
    const docRef = await addDoc(
      collection(db, "subjects", "sport-scolaire", "notes"),
      sport_scolaire
    );
    console.log("Página salva com ID: ", docRef.id);
  } catch (e) {
    console.error("Erro ao salvar a página: ", e);
  }
}
