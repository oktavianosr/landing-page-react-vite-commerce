import { TableCell, TableRow } from '@/components/ui/table';

function MenuTableSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell colSpan={6}>
            <div className="bg-muted h-12 w-full animate-pulse rounded-lg" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default MenuTableSkeleton;
