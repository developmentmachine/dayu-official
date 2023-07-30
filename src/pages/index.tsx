import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Masthead from "@/components/Masthead";
import Highlights from "@/components/Highlights";

export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>北京大誉环保科技有限公司</title>
            </Head>
            <Container>
                <Header/>
                <Highlights id={"highlights"}/>
                <Masthead id={"companyProfile"}/>
                <Products id={"products"}/>
                <Footer/>
            </Container>
        </>
    );
}
