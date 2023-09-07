import {PageWrapper} from "../components/PageWrapper/PageWrapper";
import {getLayout} from "../components/Layout/BaseLayout/Baselayout";
import Characters from "./characters";

const notFound = () => {
    return <PageWrapper> 404 NOT FOUND </PageWrapper>
}

notFound.getLayout = getLayout
export default notFound
