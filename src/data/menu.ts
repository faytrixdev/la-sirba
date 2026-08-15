export type MenuItem = {
  name: string;
  price?: number;
  description?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
  note?: string;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "sauces",
    name: "Sauces",
    note: "4 000 F / 5 000 F / 6 000 F",
    items: [
      { name: "Graine" },
      { name: "Pistache" },
      { name: "Feuille" },
      { name: "Kope" },
      { name: "Yassa" },
      { name: "Gombo grillé" },
      { name: "Gouagouassou" },
      { name: "Arachide" },
      { name: "Tomate" },
      { name: "Djoumblé" },
      { name: "Kandja" },
      { name: "Oseille" },
    ],
  },
  {
    id: "accompagnements",
    name: "Accompagnements",
    note: "1 000 F",
    items: [
      { name: "Foutou banane" },
      { name: "Foutou igname" },
      { name: "Foufou" },
      { name: "Placali" },
      { name: "Riz" },
      { name: "Tô de maïs" },
    ],
  },
  {
    id: "soupes",
    name: "Soupes",
    items: [
      { name: "Jarret", price: 4000 },
      { name: "Boyaux", price: 4000 },
      { name: "Poulet", price: 8000 },
      { name: "Poisson selon arrivage", price: 7000 },
      { name: "Pêcheur par personne", price: 12500 },
    ],
  },
  {
    id: "salades",
    name: "Salades",
    items: [
      { name: "Salade du chef", price: 4500 },
      { name: "Salade composée", price: 4500 },
      { name: "Salade de gésiers", price: 5000 },
      { name: "Salade au poulet", price: 5000 },
    ],
  },
  {
    id: "grillades",
    name: "Grillades",
    items: [
      { name: "Poulet braisé / Kiparé", price: 7000 },
      { name: "Brochette de filet", price: 5000 },
      { name: "Brochette de poulet", price: 6000 },
      { name: "Brochettes de capitaine", price: 7000 },
      { name: "Steak de filet de bœuf", price: 6000 },
      { name: "Saucisses de bœuf", price: 1500 },
      { name: "Merguez", price: 4000 },
      { name: "Ailes de poulet / dinde", price: 4000 },
      { name: "Poisson braisé selon arrivage", price: 6000 },
      { name: "Choukouya de poulet", price: 7000 },
      { name: "Choukouya de bœuf", price: 5000 },
      { name: "Choukouya de mouton", price: 7000 },
    ],
  },
];

export const menuOptions = {
  viandes: ["Bœuf", "Poisson", "Queue de bœuf", "Poulet"],
  supplement: "Crabes, escargot",
};
