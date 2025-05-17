import { Button } from "@/components/ui/button"

function index() {
  return (
    <div className="bg-primary flex justify-center items-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow-lg w-96">
            <h1 className="text-3xl text-primary font-bold mb-5">Login</h1>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Email" className="p-2 rounded-md" />
                <input type="password" placeholder="Senha" className="p-2 rounded-md" />
                <Button variant="default" className="mt-4">Entrar</Button>
            </form>
        </div>
    </div>
  )
}

export default index