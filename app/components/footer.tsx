export default function Footer() {
    return (
        <footer className="bg-[#1c5656] text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>Created by <b className="text-italic">bernadinho ndombele</b></p>
                <p>&copy; {new Date().getFullYear()} INFOIUT. Tous droits réservés.</p>
            </div>
        </footer>
    );
}