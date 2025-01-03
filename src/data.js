const data = {
    projects: [
        {
            id: 1,
            name: "Curriculum Management",
            phase: "I",
            summary: "Single-page application that allows teachers of English study curriculums to simply and easily manage their book curriculum as well create assignments and track student's progress and grades.",
            languages: ["CSS", "HTML", "JavaScript"],
            collaborators: [
                {
                    id: 1,
                    name: "Elchonon Klafter",
                    link: "https://github.com/klaftech"
                }
            ],
            features: [],
            image: "images/projects/curriculum-mgmt.png",
            gif: "images/projects/curriculum-mgmt.gif",
            website_link: "https://jtrapp18.github.io/english-study-curriculum-mgmt/",
            repo_fe: "https://github.com/jtrapp18/english-study-curriculum-mgmt",
            repo_be: "https://github.com/jtrapp18/english-study-curriculum-mgmt-be"
        },
        {
            id: 2,
            name: "Wandr Personal Travel Journal",
            phase: "II",
            summary: "A React-based application designed to document your travels, build itineraries for bucket list destinations, leave reviews and photos, and track visited places.",
            languages: ["CSS", "React"],
            collaborators: [
                {
                    id: 1,
                    name: "Kelsey Roche",
                    link: "https://github.com/kelseyroche"
                }
            ],
            features: [],
            image: "images/projects/wandr-personal-travel-journal.png",
            gif: "images/projects/wandr-personal-travel-journal.gif",
            website_link: "https://jtrapp18.github.io/wandr-personal-travel-journal/",
            repo_fe: "https://github.com/jtrapp18/wandr-personal-travel-journal",
            repo_be: "https://github.com/jtrapp18/wandr-personal-travel-journal-be"
        },
        {
            id: 3,
            name: "Rental Management Tool",
            phase: "III",
            summary: ".",
            languages: ["Python"],
            collaborators: [
            ],
            features: [],
            image: "images/projects/rental_management_tool.png",
            gif: "images/projects/rental_management_tool.gif",
            website_link: "https://github.com/jtrapp18/rental_management_tool",
            repo_fe: "https://github.com/jtrapp18/rental_management_tool",
            repo_be: null
        }
    ],
    relevantWork: [
        {
            id: 1,
            name: "Project Management Tool 'Portal'",
            summary: "Management tool used by company on a daily basis to track progress on tasks, view client/plan information, and automate mass data requests.",
            languages: ["SQL", "MS Access", "VBA"],
            features: [
                "View and manage client information, including client contacts",
                "View and manage plan information",
                "View and update regular tasks linked to individual user",
                "Filter status tracking information based on various features",
                "Generate mass emails for data requests and send draft emails to Outlook account"
            ],
            year: 0,
            company: "The Benefit Practice",
            areas: ["Pension"],
            image: null
        },
        {
            id: 2,
            name: "Pension Liability Valution",
            summary: "In-house pension funding valuation in Excel, which uses VBA to generate current and projected pension liabilities on an individual basis for a given year.",
            languages: ["VBA", "MS Excel"],
            features: [
                "Calculate current and projected liabilities for Unit Accrual, Final Average Salary and Cash Balance Plan types",
                "Calculates pension liabilities for year-end FASB Disclosures"
            ],
            year: 0,
            company: "The Benefit Practice",
            areas: ["Pension"],
            image: null
        },
        {
            id: 3,
            name: "Projected Pension Liabilities",
            summary: "Project seriatim-level projected 401-k expenses for hypothetical client retirement plan",
            languages: ["Python"],
            features: [
                "Project rollforwards for various investment accounts in hypothetical 401-k plan"
            ],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Consulting"],
            image: "images/projects/curriculum-mgmt.png"
        },
        {
            id: 4,
            name: "VA Lapse Experience Study for Audit",
            summary: "Generates VA lapse experience study based on actual experience study data, used to assess reasonability of client lapse assumptions for year-end audit.",
            languages: ["Python"],
            features: [
                "Utilizes sk-learn library to fit experience data to logistic regression, random forest and neural network models",
                "Compares models and chooses the 'best' model based on pre-determined metrics",
                "Performs comprehensive validation procedures on client experience study data",
                "Generates exploratory analysis graphs used to assess client data",
                "Generates graphs to compare client data to PwC-produced data",
                "Generates standardizes pdf report containing graphs described above",
                "Reads and writes data to and from AWS S3 buckets",
                "Utilizes streamlit library to summarize results and allow user to download reports"
            ],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit"],
            image: "images/projects/curriculum-mgmt.png"
        },
        {
            id: 5,
            name: "Assumption Inventory",
            summary: "",
            languages: ["VBA", "SQL", "MS Access"],
            features: [

            ],
            year: 0,
            company: "Knights of Columbus",
            areas: ["Life Insurance"],
            image: "images/projects/curriculum-mgmt.png"
        },
    ],
    socials: [
        {
            id: 1,
            name: "LinkedIn",
            image: "LI-In-Bug.png",
            link: "https://www.linkedin.com/in/jacqueline-trapp-065a936b"
        },
        {
            id: 2,
            name: "Github",
            image: "github-mark.png",
            link: "https://github.com/jtrapp18"
        },
        {
            id: 3,
            name: "Hashnode",
            image: "hashnode.png",
            link: "https://hashnode.com/672903e59b3903ff579fbdcd/dashboard"
        }
    ]
}

export default data;