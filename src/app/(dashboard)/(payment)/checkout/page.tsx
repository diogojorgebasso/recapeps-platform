import Checkout from './CheckoutComponent'

export default async function Page({ searchParams }: { searchParams: Promise<{ priceId: string }> }) {
    const { priceId } = await searchParams
    return (
        <div id="checkout">
            <Checkout priceId={priceId} />
        </div>
    )
}