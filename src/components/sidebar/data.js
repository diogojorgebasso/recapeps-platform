const data = {
    navMain: [
      {
        title: "Tableau de bord",
        url: "/dashboard",
        icon: Inbox,
        isActive: true,
      },
      {
        title: "Quizz",
        url: "/quizz",
        icon: ListTodo,
        items: [
          {
            title: "Exp. pédagogiques",
            url: "/quizz/ecrit-1/expérimentations-pédagogiques",
          },
          {
            title: "Les émotions",
            url: "/quizz/ecrit-2/les-émotions",
          },
          {
            title: "Mixité sexuée",
            url: "/quizz/ecrit-1/mixité-sexuée",
          },
        ],
      },
      {
        title: "Flashcards",
        url: "/flashcards",
        icon: BookOpen,
        items: [
          {
            title: "Mutations du système éducatif",
            url: "/flashcards/mutations-systeme-educatif",
          },
          {
            title: "Contexte politique",
            url: "/flashcards/contexte-politique",
          },
          {
            title: "Sport scolaire",
            url: "/flashcards/sport-scolaire",
          },
        ],
      },
      {
        title: "ChatBot",
        url: "/chatbot",
        icon: Bot,
      },
      {
        title: "Fiches de révision",
        url: "/notes",
        icon: NotebookTabs,
        items: [
          {
            title: "Mixité sexuée",
            url: "/notes/ecrit-1/mixite-sexuee",
          },
          {
            title: "Les emotions",
            url: "/notes/ecrit-2/les-emotion",
          },
  
        ]
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "/support",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        url: "https://forms.gle/T53NiA3mLWJGMtD4A",
        icon: Send,
      },
    ]
  }