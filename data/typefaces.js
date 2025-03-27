function Typeface (name, creator, classification, description) {
    this.name = name;
    this.creator = creator;
    this.classification = classification;
    this.description = description;
}

let Typefaces = [
    new Typeface('Akzidenz-Grotesk', 'Günter Gerhard Lange', 'Grotesque', 'Probably the most influential typeface for this movement, Akzidenz-Grotesk was released by the Berthold Type Foundry in 1896 and was arguably the first of its kind. It soon became one of the most widely used typefaces and was even sold in the U.S. under the names “Standard” or “Basic Commercial.” If that doesn’t shout “FIRST!” I don’t know what does.'),
    new Typeface('Univers', 'Adrian Frutiger', 'Neo-grotesque', `Adrian Frutiger, one of the most influential typeface designers of the 20th century, created Univers in 1954. Pulling elements from Akzidenz-Grotesk, Frutiger created one of the first typefaces that formed a font family, allowing documents to use one typeface (instead of several) in various sizes and weights, creating a beautifully simple uniform via text alone. Originally released by Danberry & Peignot in 1957, the family passed through the hands of the Haas Type Foundry before being purchased in 2007 (along with all of Linotype) by Monotype.`),
    new Typeface('Helvetica', 'Max Miedinger & Eduard Hoffmann', 'Neo-grotesque', 'When Max Miedinger and Eduard Hoffmann created Helvetica in 1957, did they know their work would result in what is arguably the most ubiquitous sans serif typeface in the world? Probably not. Did they think, for just a moment, their typeface would inspire a film? Again, probably not. But here we are, nearly 60 years later, with an 88% fresh rating on Rotten Tomatoes, and Simon Garfield regarding Helvetica as “ubiquitous because it fulfills so many demands for modern type.”')
]

export default Typefaces;