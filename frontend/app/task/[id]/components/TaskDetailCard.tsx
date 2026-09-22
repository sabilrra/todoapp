import React from 'react';
import Link from 'next/link';
import { Todo } from '@/types/todo';

type TaskDetailCardProps = {
  todo: Todo;
};

export default function TaskDetailCard({ todo }: TaskDetailCardProps) {
  return (
    <main className="min-h-screen p-8 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <header className="mb-6 border-b pb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Detail Tugas</h1>
          <Link
            href="/"
            className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-md transition font-medium"
          >
            Kembali ke Daftar
          </Link>
        </header>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              ID TUGAS
            </label>
            <p className="text-gray-700 font-medium">#{todo.id}</p>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              JUDUL TUGAS
            </label>
            <h2 className="text-xl font-bold text-gray-900">{todo.title}</h2>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              DESKRIPSI
            </label>
            <p className="text-gray-600 bg-gray-50 p-4 rounded-md border border-gray-200 mt-1">
              {todo.description}
            </p>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              STATUS
            </label>
            <div className="mt-1">
              <span
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                  todo.completed
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-100 text-amber-700 border border-amber-200'
                }`}
              >
                {todo.completed ? '✓ Selesai' : '⏳ Belum Selesai'}
              </span>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              TANGGAL DIBUAT
            </label>
            <p className="text-gray-600 text-sm mt-1">{todo.createdAt}</p>
          </div>
        </div>
      </div>
    </main>
  );
}