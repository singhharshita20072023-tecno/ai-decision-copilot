type DashboardProps = {
  data: any;
};

export default function Dashboard({ data }: DashboardProps) {
  return (
    <div className="mt-8">

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Rows</h3>
          <p className="text-3xl font-bold">{data.rows}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Columns</h3>
          <p className="text-3xl font-bold">{data.columns.length}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Numeric Columns</h3>
          <p className="text-3xl font-bold">
            {Object.keys(data.statistics).length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Preview Rows</h3>
          <p className="text-3xl font-bold">
            {data.preview.length}
          </p>
        </div>

      </div>

    </div>
  );
}