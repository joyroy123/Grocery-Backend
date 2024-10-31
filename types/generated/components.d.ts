import type { Struct, Schema } from '@strapi/strapi';

export interface OrderedItemOrderedItem extends Struct.ComponentSchema {
  collectionName: 'components_ordered_item_ordered_items';
  info: {
    displayName: 'OrderedItem';
  };
  attributes: {
    quantity: Schema.Attribute.Integer;
    price: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ordered-item.ordered-item': OrderedItemOrderedItem;
    }
  }
}
