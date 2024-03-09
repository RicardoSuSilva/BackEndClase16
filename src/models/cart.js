import { Schema, model } from 'mongoose'
//carrito solo guarda IDs de productos con el atributo ref.
const cartSchema = new Schema({
    products: {
        type: [
            {
                id_prod: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'products'
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        default: [] // arranca vacio el array
    }

})

cartSchema.pre('findOne', function () {
    this.populate('products.id_prod')
})

const cartModel = model("carts", cartSchema)

export default cartModel