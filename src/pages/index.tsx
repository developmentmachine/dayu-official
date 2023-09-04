import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Achievement from "@/components/Achievement";
import CompanyProfile from "@/components/CompanyProfile";
import Highlight from "@/components/Highlight";
import ProductService from "@/components/ProductService";
import ResearchHistory from "@/components/ResearchHistory";

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
                {/*<Highlight id={"highlight"}/>*/}
                <CompanyProfile id={"companyProfile"}/>
                <ProductService id={"ability"}/>
                <ResearchHistory id={"researchHistory"}/>
                <Achievement id={"achievement"}/>
                <Footer id={"aboutUs"}/>
            </Container>
        </>
    );
}
