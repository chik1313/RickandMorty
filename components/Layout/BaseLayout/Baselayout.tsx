import {NextPage} from "next";
import {PropsWithChildren, ReactElement} from "react";
import {Layout} from "../Layout";

export const Baselayout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props

    return <Layout>{children}</Layout>
}

export const getLayout = (page: ReactElement) => {
    return <Baselayout>{page}</Baselayout>
}
