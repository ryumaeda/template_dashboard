import React from "react";
import Image from "next/image";

const ReportOne = () => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="grid grid-cols-1 gap-4">
        {/* Summary Section */}
        <div className="rounded-xl bg-gradient-to-br from-yellow-50 to-white p-6 shadow-sm dark:from-gray-800 dark:to-gray-900">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
            Summary
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-700">
              <p className="mt-2 font-semibold text-gray-700 dark:text-gray-200">
                通常運用の範囲内で推移しています。
              </p>
              <ul className="mt-3 list-disc pl-5 font-semibold text-gray-700 dark:text-gray-200">
                <li>Webサーバーへのアクセス数: 正常範囲内</li>
                <li>ファイアウォールでのブロック: 検知なし</li>
                <li>ルーター設定変更: 2件発生</li>
                <li>異常トラフィック: 未検出</li>
                <li>システムエラー: 報告なし</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Required Actions Section */}
        <div className="rounded-xl bg-gradient-to-br from-red-50 to-white p-6 shadow-sm dark:from-gray-800 dark:to-gray-900">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
            To do
          </h2>

          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-700">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                    優先度高
                  </h3>
                  <ul className="mt-2 list-inside list-disc font-bold text-gray-600 dark:text-gray-300">
                    <li>特になし</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                    優先度中
                  </h3>
                  <ul className="mt-2 list-inside list-disc font-bold text-gray-600 dark:text-gray-300">
                    <li>システム監視の強化</li>
                    <li>バックアップ体制の見直し</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Security Section */}
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm dark:from-gray-800 dark:to-gray-900">
            <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
              Security
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-4 dark:bg-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/brand/firewall.jpg"
                      alt="Firewall"
                      width={48}
                      height={48}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                      Firewall Traffic
                    </h3>
                    <div className="mt-2 space-y-2">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Allowed: 2,345
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Blocked: 127
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 dark:bg-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/brand/webserver.jpg"
                      alt="Web Server"
                      width={48}
                      height={48}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                      Web Server Logs
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Error: 23
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Capacity Section */}
          <div className="rounded-xl bg-gradient-to-br from-green-50 to-white p-6 shadow-sm dark:from-gray-800 dark:to-gray-900">
            <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
              Capacity
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg bg-white p-4 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                  Network Utilization
                </h3>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  67%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Average over last 24h
                </p>
              </div>

              <div className="rounded-lg bg-white p-4 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-700 dark:text-gray-200">
                  Server Load
                </h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  82%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Peak time usage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportOne;
