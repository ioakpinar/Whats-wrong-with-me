import Category from "../models/Category";
import Disease from "../models/Disease";

export const CATEGORIES = [
  new Category("c1", "Ağrılar"),
  new Category("c2", "Yanmalar"),
  new Category("c3", "Acılar"),
  new Category("c4", "Batmalar"),
  new Category("c5", "Kaşıntılar"),
  new Category("c6", "Kızarıklıklar & morluklar"),
  new Category("c7", "Kuruluklar"),
  new Category("c8", "Akıntılar"),
  new Category("c9", "Dökülmeler"),
  new Category("c10", "Uyuşmalar"),
  new Category("c11", "Kramplar"),
  new Category("c12", "Tutulmalar"),
];

export const DISEASES = [
  new Disease(
    "d1",
    ["c1", "c2"],
    "Örnek hastalık 1",
    "Hastalık ile ilgili açıklama ve tanımlar",
    ["belirti 1", "belirti 2"],
    ["öneri 1", "öneri 2", "öneri 3"],
    "ciddi"
  ),
  new Disease(
    "d2",
    ["c3", "c4", "c5"],
    "Örnek hastalık 2",
    "Hastalık ile ilgili açıklama ve tanımlar",
    ["belirti 1", "belirti 2"],
    ["öneri 1", "öneri 2", "öneri 3"],
    "ciddi"
  ),
  new Disease(
    "d3",
    ["c6", "c2"],
    "Örnek hastalık 3",
    "Hastalık ile ilgili açıklama ve tanımlar",
    ["belirti 1", "belirti 2"],
    ["öneri 1", "öneri 2", "öneri 3"],
    "ciddi"
  ),
  new Disease(
    "d4",
    ["c7", "c8"],
    "Örnek hastalık 4",
    "Hastalık ile ilgili açıklama ve tanımlar",
    ["belirti 1", "belirti 2"],
    ["öneri 1", "öneri 2", "öneri 3"],
    "ciddi"
  ),
  new Disease(
    "d5",
    ["c9", "c12"],
    "Örnek hastalık 5",
    "Hastalık ile ilgili açıklama ve tanımlar",
    ["belirti 1", "belirti 2"],
    ["öneri 1", "öneri 2", "öneri 3"],
    "ciddi"
  ),
  new Disease(
    "d6",
    ["c10", "c11"],
    "Örnek hastalık 6",
    "Hastalık ile ilgili açıklama ve tanımlar",
    ["belirti 1", "belirti 2"],
    ["öneri 1", "öneri 2", "öneri 3"],
    "ciddi"
  ),
  new Disease(
    "d7",
    ["c1", "c6"],
    "Örnek hastalık 6",
    "Hastalık ile ilgili açıklama ve tanımlar",
    ["belirti 1", "belirti 2"],
    ["öneri 1", "öneri 2", "öneri 3"],
    "ciddi"
  ),
  new Disease(
    "d8",
    [
      "c1",
      "c2",
      "c3",
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "c10",
      "c11",
      "c12",
    ],
    "Örnek hastalık 8",
    "Hastalık ile ilgili açıklama ve tanımlar",
    ["belirti 1", "belirti 2"],
    ["öneri 1", "öneri 2", "öneri 3"],
    "ciddi"
  ),
];
