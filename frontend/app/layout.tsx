import "./styles/globals.scss";
import {Rubik} from 'next/font/google'
import Header from "@/app/components/Header";
import {getMenu} from "@/app/api/api";
import {TeamProvider} from "@/app/context/context";

const rubik = Rubik({
    subsets: ['cyrillic', 'latin'],      // доступні: 'latin', 'cyrillic', 'greek', etc.
    weight: ['300', '500'],  // потрібні варіанти жирності
    variable: '--font-rubik', // необов'язково: змінна для CSS (якщо треба)
    display: 'swap',
})

export default async function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    const menuItems = await getMenu();

    return (
        <html lang="en">
        <body className={rubik.className}>
        <main className={'main'}>
            <TeamProvider>
                <Header menuItems={menuItems[0].attributes}/>
                {children}
            </TeamProvider>
        </main>
        </body>
        </html>
    );
}
