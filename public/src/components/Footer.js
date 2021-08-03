import style from '../styles/style.css'
import github from '../utils/github.png'
import linkedin from '../utils/Linkedin.png'
import twitter from '../utils/twitter.png'

export default function Header() {

    return (
        <footer class="footer mt-24 flex justify-center">

          <a href="https://github.com/Brucksta?tab=repositories" target="_blank"><div><img class="mr-1" src={github} alt=""/></div></a>
          <a href="https://www.linkedin.com/in/peter-bruckner-3b84a4206/" target="_blank"><div><img class="ml-1" src={linkedin} alt=""/></div></a>
          <a href="https://twitter.com/Brucksta56/" target="_blank"><div><img class="ml-1" src={twitter} alt=""/></div></a>
          <div><p class="ml-5">Website by Peter Brückner, 2021.</p></div>
</footer>
    )
}