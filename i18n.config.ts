export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      title: 'Delivery',
      text1: 'Each client can purchase goods in our store and pick them up in our warehouse, as well as receive goods delivered to their homes with assembly.',
      text2: 'Our specialists will qualitatively assemble the furniture you have chosen. Each client will be satisfied with the purchase.',
      text3: 'Contact phone number for consultation:'
    },
    fr: {
      title: 'Livraison',
      text1: 'Chaque client peut acheter des marchandises dans notre magasin et les récupérer dans notre entrepôt, ainsi que recevoir des marchandises livrées à domicile avec assemblage.',
      text2: "Nos spécialistes assembleront qualitativement les meubles que vous aurez choisis. Chaque client sera satisfait de l'achat.",
      text3: 'Numéro de téléphone de contact pour consultation:'
    }
  }
}))