import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <div className="bg-white p-8 shadow-lg rounded-lg">
      <header className="flex items-center justify-between mb-6">
        <div></div>
        <div className="text-right">
          <p className="text-gray-500 text-sm">
            Invoice #{Math.random() * 10000}
          </p>
          <p className="text-gray-500 text-sm">Date: {new Date().toString()}</p>
        </div>
      </header>
      <main>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                Service
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                Rate
              </th>
              <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                Days
              </th>
              <th className="py-2 px-4 text-right text-sm font-medium text-gray-700">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4 px-4 text-sm text-gray-700">
                E-plan Archive Development
              </td>
              <td className="py-4 px-4 text-sm text-gray-700">N$152.17</td>
              <td className="py-4 px-4 text-sm text-gray-700">40</td>
              <td className="py-4 px-4 text-right text-sm text-gray-700">
                N$3500.00
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-4 text-sm text-gray-700">UI/UX Design</td>
              <td className="py-4 px-4 text-sm text-gray-700">N$152.17</td>
              <td className="py-4 px-4 text-sm text-gray-700">20</td>
              <td className="py-4 px-4 text-right text-sm text-gray-700">
                N$1500.00
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-4 text-sm text-gray-700">
                Maintenance & Debugging
              </td>
              <td className="py-4 px-4 text-sm text-gray-700">N$65.21</td>
              <td className="py-4 px-4 text-sm text-gray-700">10</td>
              <td className="py-4 px-4 text-right text-sm text-gray-700">
                N$1500.00
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 text-right">
          <p className="text-gray-500 text-sm">Total: N$5,000</p>
        </div>
      </main>
      <footer className="mt-8">
        <h3 className="text-gray-700 font-medium mb-2">Payment Instructions</h3>
        <p className="text-gray-500 text-sm mb-4">
          Please make payment to the following account:
        </p>
        <p className="text-gray-500 text-sm">
          Bank: Bank Windhoek
          <br />
          Account Number: 8014857662
          <br />
          Branch: Windhoek Branch 484372
        </p>
        <div className="mt-6">
          <h3 className="text-gray-700 font-medium mb-2">Contact Us</h3>
          <p className="text-gray-500 text-sm">
            Denilson Uariua
            <br />
            Windhoek, Namibia
            <br />
            Phone: (081) 217-2061
            <br />
            Email: denuariua@gmail.com
          </p>
        </div>
      </footer>
    </div>
  </div>
);
