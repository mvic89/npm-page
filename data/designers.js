function Designer (name, born, dead, description) {
    this.name = name;
    this.born = born;
    this.dead = dead;
    this.description = description;
}

let Designers = [
    new Designer('Ernst Keller', 'June 15th 1891', 'November 4th 1968', `Ernst Keller, lovingly known as the “father of Swiss design.” The year is 1918 and Keller just received a teaching position at the Kunstgewerbeschule (literally translated “arts and crafts school”) in Switzerland. His teachings mark the beginning of the grid systems for which Swiss Style is known, and his belief that design should adapt to content placed focus on the importance of typefaces. Little did Keller know, some of his students would become the forefront runners in the creation of the International Typographic Style movement. Shall we call them the sons of Swiss Style?` ),
    new Designer('Armin Hofmann', 'June 29th 1920', 'December 18th 2020', `Armin Hofmann, along with Emil Ruder, founded the Schule für Gestaltung (School of Design) in 1947. Hofmann began teaching and was often regarded as unorthodox in his ways. Much of his work focused on elements of graphic form while remaining simple and objective. His compositions, having been influenced by Ernst Keller’s teachings, often made use of typography over illustration. Hofmann’s curriculum has been somewhat adapted, yet is still taught today at the School of Design in Basel, Switzerland.`),
    new Designer('Josef Müller-Brockmann', 'May 9th 1914', 'August 30th 1996', `Josef Müller-Brockmann, another student of Keller’s, heavily focused his work around the grid system and Akzidenz-Grotesk typeface. After taking over Keller’s teaching position at the Kunstgewerbeschule and later opening his own design firm, Müller-Brockmann helped spread the Swiss aesthetic far beyond the borders of Europe by establishing the Neue Grafik (New Graphic Design) journal—a trilingual magazine he co-edited with Franco Vivarelli, Hans Neuberg and Richard Paul Lohse.` )
]

export default Designers;