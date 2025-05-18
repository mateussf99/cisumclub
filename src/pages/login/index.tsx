import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authService } from "@/services/api";
import { useState } from "react";
import Logo from '../../assets/Logo.png';

function index() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!email || !password) {
      setError("Por favor, preencha todos os campos")
      return
    }
    
    setLoading(true)
    setError("")
    
    try {
       await authService.login(email, password)
      console.log("Login realizado com sucesso:")
      // Redirecionar para a página principal após login bem-sucedido
      window.location.href = '/parceiros';
    } catch (err: any) {
    //   console.error("Erro ao fazer login:", err)
      setError(
        err.response?.data?.message || 
        "Falha ao fazer login. Verifique suas credenciais."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-primary flex justify-center items-center h-screen">
        <div className="bg-white p-5 rounded-lg shadow-lg w-[340px] justify-items-center">
            <div className="flex-col justify-items-center mb-5">
              <img src={Logo} alt="Logo" className=" rounded-2xl w-10 h-10" />
                <h1 className="text-3xl text-primary font-bold ">Cisum club</h1>
                <h1 className="text-xl text-primary font-bold mb-5">Login</h1>
            </div>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                {error}
              </div>
            )}
            
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
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              
              <Button 
                type="submit" 
                className="mt-4"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
        </div>
    </div>
  )
}

export default index