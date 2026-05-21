type ComparisonTableProps = {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
};

export function ComparisonTable({ headers, rows, caption }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-softBorder">
      <table className="w-full text-sm">
        {caption ? (
          <caption className="mb-2 px-4 pt-3 text-left text-sm font-semibold text-deepInlet">
            {caption}
          </caption>
        ) : null}
        <thead className="bg-mist">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.08em] text-forest"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-softBorder bg-white">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-mist/50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slateText">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
