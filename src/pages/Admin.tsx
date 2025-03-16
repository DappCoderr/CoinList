import React from "react";

const Admin = () => {
  const users = [
    {
      id: 1,
      name: "Alice Smith",
      email: "alice@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Editor",
      status: "Active",
    },
  ];

  const stats = [
    { name: "Total Coins", value: "2,345", change: "+12.5%" },
    { name: "Active Users", value: "1,234", change: "+4.2%" },
    { name: "Transactions", value: "89.4K", change: "-1.3%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <button className="flex items-center gap-2 hover:bg-gray-800/50 px-4 py-2 rounded-lg transition-all">
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm text-gray-500">{stat.name}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stat.value}
              </p>
              <span
                className={
                  stat.change.startsWith("+")
                    ? "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    : "bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                }
              >
                {stat.change}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              User Management
            </h2>
          </div>
          <table className="w-full">
            <thead className="bg-gray-500">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Role</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
