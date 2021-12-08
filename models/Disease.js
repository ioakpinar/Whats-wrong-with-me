class Disease {
  constructor(
    id,
    categoryId,
    name,
    description,
    symptoms,
    suggestions,
    importance
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.description = description;
    this.symptoms = symptoms;
    this.suggestion = suggestion;
    this.importance = importance;
  }
}
export default Disease;
