import { getRecievedTransfers } from "../../lib/GetRecievedTransfers";
import { getSendTransfers } from "../../lib/GetSendTransfers";

export default async function () {
  const SentTransfers: any[] = await getSendTransfers();
  const RecievedTransfers: any[] = await getRecievedTransfers();
  return (
    <div>
      <h1 className="text-center">Send records</h1>
      {SentTransfers.map((el: any) => {
        return (
          <div className="flex w-48 justify-between">
            <h1>ToUser : {el.toUserId}</h1>
            <p>Amount -{el.amount/100}</p>
          </div>
        );
      })}
      <h1 className="text-center">Recieved records</h1>
      {RecievedTransfers.map((el: any) => {
        return (
          <div className="flex w-48 justify-between">
            <h1>FromUser : {el.fromUserId}</h1>
            <p>Amount  +{el.amount/100}</p>
          </div>
        );
      })}
    </div>
  );
}
