import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Achievement from "@/components/Achievement";
import CompanyProfile from "@/components/CompanyProfile";
import ProductService from "@/components/ProductService";
import ResearchHistory from "@/components/ResearchHistory";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

type Props = {
    // Add custom props here
    time: string
}
// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
// export const getStaticProps: GetStaticProps<Props> =
export const getServerSideProps: GetServerSideProps<Props> =
    async ({locale, res}) => {
        res.setHeader(
            'Cache-Control',
            'public, max-age=31536000, immutable'
        )
        return {
            props: {
                ...(await serverSideTranslations(locale ? locale : 'zh', [
                    'common',
                    'header',
                    'companyProfile',
                    'productService',
                    'researchHistory',
                    'achievement',
                    'footer'
                ])),
                time: new Date().toISOString(),
            },
        }
    }
export default function Home({time,}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {t} = useTranslation()
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>{t("common:title")}</title>
                <time dateTime={time}>{time}</time>
            </Head>
            <div>
                <Header/>
                {/*<Highlight id={"highlight"}/>*/}
                <CompanyProfile id={"companyProfile"}/>
                <ProductService id={"ability"}/>
                <ResearchHistory id={"researchHistory"}/>
                <Achievement id={"achievement"}/>
                <Footer id={"aboutUs"}/>
            </div>
        </>
    );
}
