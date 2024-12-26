import { ReactNode } from "react"

type SectionProps = {
    title?: string
    children: ReactNode
}

export const Section = ({title = "Section Title", children}:SectionProps)  => {
    return <section>
        <h1>{title}</h1>
        {children}
    </section>
}