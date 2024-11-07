import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";

const TransactionPage = async () => {
  const transactions = await db.transaction.findMany({});
  // {transactions.map((transaction) => (
  //   <div key={transaction.id}>{transaction.name}</div>
  // ))}
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adicionar transação
          <ArrowDownUpIcon></ArrowDownUpIcon>
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions}></DataTable>
    </div>
  );
};

export default TransactionPage;
