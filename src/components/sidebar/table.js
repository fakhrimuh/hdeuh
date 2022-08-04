export default function Table() {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full border-2 border-orange-gray text-center">
              <thead class="border-b bg-orange-default border-orange-gray">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 border-r border-orange-gray"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 border-r border-orange-gray"
                  >
                    Nama
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium px-6 py-4 border-r border-orange-gray"
                  >
                    PA
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium border-r border-orange-gray px-6 py-4"
                  >
                    K. Awur
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium border-r border-orange-gray px-6 py-4"
                  >
                    K. Pak
                  </th>
                  <th
                    scope="col"
                    class="text-sm border-r border-orange-gray font-medium px-6 py-4"
                  >
                    Bolu
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium border-r border-orange-gray px-6 py-4"
                  >
                    Roti
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* first row */}
                <tr class="border-b border-orange-gray">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium border-r border-orange-gray">
                    1
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap">Dummy</td>
                </tr>

                {/* Second row */}
                <tr class="border-b border-orange-gray">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium border-r border-orange-gray">
                    2
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap">Dummy</td>
                </tr>

                {/* Third row */}
                <tr class="border-b border-orange-gray">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium border-r border-orange-gray">
                    3
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap border-r border-orange-gray">
                    Dummy
                  </td>
                  <td class="text-sm  px-6 py-4 whitespace-nowrap">Dummy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
