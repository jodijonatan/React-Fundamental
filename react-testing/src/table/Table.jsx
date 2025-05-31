import Row from "./Row";

export default function Table () {
    return (
        <table className="mx-auto mt-6">  
            <tbody>
                <Row id="1" text="Satu"/>
                <Row id="2" text="Dua"/>
                <Row id="3" text="Tiga"/>
            </tbody>
        </table>
    ) 
}