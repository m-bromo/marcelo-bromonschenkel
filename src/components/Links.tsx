import { Github, Linkedin, Mail } from "lucide-react";

export default function () {
    return (
        <div className="flex flex-row gap-4">
            <a href="https://www.linkedin.com/in/marcelo-bromonschenkel/">
                <Linkedin color="white" />
            </a>

            <a href="https://github.com/m-bromo">
                <Github color="white" />
            </a>

            <a href="mailto:bromolima2@gmail.com">
                <Mail color="white" />
            </a>
        </div>
    );
}
