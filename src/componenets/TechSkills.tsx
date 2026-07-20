import {
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faMusic,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TechSkills() {
  return (
    <div>
        <h2 className="text-2xl">My Repetoire <FontAwesomeIcon icon={faMusic} /></h2> 
    <div className="text-left flex gap-2 justify-center">
      <div className="w-1/5 border-t pt-2">
        <h3 className="font-[Cousine] font-bold">
          <FontAwesomeIcon icon={faCode} /> {" "}
          Languages I know...
        </h3>
        <div className="text-sm">
          <ul className="list-['☕︎'] list-outside">
            <li className="pl-2">Javascript + Typescript</li>
            <li className="pl-2">Python</li>
            <li className="pl-2">Java</li>
            <li className="pl-2">C/C++/C#</li>
            <li className="pl-2">HTML/CSS</li>
            <li className="pl-2">Go</li>
            <li className="pl-2">mySQL</li>
            <li className="pl-2">Assembly</li>
            <li className="pl-2">Racket</li>
            {/* <li className="pl-2">Rust</li> */}
          </ul>
        </div>
      </div>

      <div className="w-1/3 border-t pt-2">
        <h3 className="font-[Cousine] font-bold">
          <FontAwesomeIcon icon={faReact} /> {" "}
          Libraries + Frameworks <br/>I've worked with...
        </h3>
        <div className="text-sm">
          <ul>
            <li>
              <b>Web:</b> React, Next, Vue, Express, Mongo, Redux, Flask
            </li>
            <li>
              <b>Data:</b> Pandas, NumPy, Matplotlib, D3
            </li>
            <li>
              <b>ML:</b> PyTorch, Sci-kit
            </li>
            <li>
              <b>Firmware:</b> ROS, Arduino, ESP
            </li>
            <li>
              <b>Graphics:</b> Unity, OpenGL, ThreeJS
            </li>
            <li>
              <b>MiscFun:</b> Charmbracelet
            </li>
          </ul>
        </div>{" "}
      </div>
      <div className="w-1/3 border-t pt-2">
        <h3 className="font-[Cousine] font-bold">
          <FontAwesomeIcon icon={faTools} /> {" "}
          Tools I use
        </h3>

        <div className="text-sm">
          <ul>
            <li>
              <b>Version Control:</b> Git, Github, Gitlab
            </li>
            <li>
              <b>Database:</b> Datagrip, MongoDB Compass
            </li>
            <li>
              <b>DevOps:</b> Docker, Github Actions, AWS, Heroku, Vercel, Netlify
            </li>
            <li>
              <b>Tools:</b> VSCode, VMWare Fusion, Arduino IDE, Postman,
              Scenebuilder, Figma, Jetbrains
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
