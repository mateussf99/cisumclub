import Header from '../../components/hearder'
import { Button } from "@/components/ui/button";

function index() {
  return (
    <div className='flex flex-col w-full h-full justify-center bg-white'>
        <div className='fixed top-0 left-0 w-full z-10 '>
            <Header />
        </div>
        <div></div>
    </div>
  )
}

export default index