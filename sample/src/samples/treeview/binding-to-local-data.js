export class BindingToLocalData {
    constructor() {
      this.defaultData =  [
        { text: 'Furniture', items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' }
        ] },
        { text: 'Decor', items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' }
        ] }
      ];
      this.inlineData = {
        data: [
          { categoryName: 'Storage', subCategories: [
          { subCategoryName: 'Wall Shelving' },
          { subCategoryName: 'Floor Shelving' },
          { subCategoryName: 'Kids Storage' }
          ] },
            { categoryName: 'Lights', subCategories: [
            { subCategoryName: 'Ceiling' },
            { subCategoryName: 'Table' },
            { subCategoryName: 'Floor' }
            ] }
        ],
        schema: {
          model: {
            children: 'subCategories'
          }
        }
      };
    }
}