export default function Layout({ children }: {children: ReactNode}) {
    return(
        <main>
            <nav>Navegación de las categorías</nav>
            {children}
        </main>
    )

}