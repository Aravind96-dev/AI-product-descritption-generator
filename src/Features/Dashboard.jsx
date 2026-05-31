import ProductForm from './ProductForm'

export default function Dashboard() {
    return (
        <div>
           <header className="h-16 font">AI Product Description</header>
            <div className="flex">
                <ProductForm />
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}