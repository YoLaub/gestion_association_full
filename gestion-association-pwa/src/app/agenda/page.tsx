import AgendaView from "@/features/agenda/presentation/AgendaView";
import { SignedIn } from "@clerk/nextjs";


export default function AgendaHome(){
    return (<SignedIn>
        <AgendaView/>
        </SignedIn>
    )
}