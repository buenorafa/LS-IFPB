import React from "react";

export default function Contact() {
  return (
    <div id="container_contato">
      <form
        action="/submit"
        method="POST"
        class="bg-gradient-to-r from-lime-800 via-lime-700 to-lime-700 shadow-lg rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="name">
            Nome
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="phone">
            Telefone
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="phone"
            required
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-white text-sm font-bold mb-2"
            for="description"
          >
            Descrição
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
