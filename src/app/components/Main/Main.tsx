import Breakpoints from "../Breakpoints/Breakpoints";
import Cards from "../Cards/Cards";
import ResponsiveCard from "../ResponsiveCard/ResponsiveCard";
import Text from "../Text/Text";

function Main() {
    return (
        <main className="main mt-6">
            <Cards/>
            <ResponsiveCard />
            <Breakpoints />
            <Text/>
        </main>
    );
}

export default Main;
