interface FooterProps {
    startYear: number;
    name: string;
    beian?: {
        url: string;
        text: string;
    };
}

function Footer(props: FooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer class="flex justify-center font-size-14px fixed bottom-0 w-full h-35px">
            Copyright &copy; {props.startYear} - {year} {props.name}
            {props.beian &&
                <>&nbsp;&&nbsp;
                    <a 
                        href={props.beian.url} 
                        target="_blank" 
                        class="color-white decoration-none cursor-pointer"
                    >
                        {props.beian.text}
                    </a>
                </>
            }
        </footer>

    )
}

export default Footer