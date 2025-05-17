import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from '../../assets/Logo.png';
import { useState } from "react"

function index() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className="bg-primary flex justify-center items-center h-screen">
        <div className="bg-white p-5 rounded-lg shadow-lg w-[340px] justify-items-center">
            <div className="flex-col justify-items-center mb-5">
              <img src={Logo} alt="Logo" className=" rounded-2xl w-10 h-10" />
                <h1 className="text-3xl text-primary font-bold ">Cisum club</h1>
                <h1 className="text-xl text-primary font-bold mb-5">Login</h1>
            </div>
            
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
              <div className="">
                <label htmlFor="email" className="text-sm font-medium text-primary">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="seu@email.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-primary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="">
                <label htmlFor="password" className="text-sm font-medium text-primary">
                  Senha
                </label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Senha" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-primary rounded-md p-2 focus:outline-none focus:ring-0 focus:ring-primary"
                />
              </div>
              
              <Button type="submit" className="mt-4">Entrar</Button>
            </form>
        </div>
    </div>
  )
}

export default index