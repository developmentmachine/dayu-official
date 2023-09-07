import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Achievement from "@/components/Achievement";
import CompanyProfile from "@/components/CompanyProfile";
import Highlight from "@/components/Highlight";
import ProductService from "@/components/ProductService";
import ResearchHistory from "@/components/ResearchHistory";
import {useTranslation} from "next-i18next";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type Props = {
    // Add custom props here
}
// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({locale,}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'zh', [
            'common',
            'header',
            'companyProfile',
            'productService',
            'researchHistory',
            'achievement',
            'footer'
        ])),
    },
})
export default function Home() {
    const { t } = useTranslation()
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{t("common:title")}</title>
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
