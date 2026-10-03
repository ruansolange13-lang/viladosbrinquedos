import React from 'react';
import { ShoppingBag, ShieldCheck, Zap } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onBuyNowClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onBuyNowClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800">
      {/* Slim Promotional Bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-blue-700 text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold">
              <Zap className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
              PROMOÇÃO EXCLUSIVA
            </span>
            <span className="hidden sm:inline text-white/90">·</span>
            <span className="hidden sm:inline text-white/90">Frete Grátis para todo o Brasil + 10% OFF no Pix</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-white/90">
            <span className="hidden md:inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Garantia de 90 Dias
            </span>
            <span className="font-semibold text-yellow-200">Envio Imediato Full</span>
          </div>
        </div>
      </div>

      {/* Strict Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* Zone 1: Single text wordmark side-by-side */}
        <a
          href="#inicio"
          className="text-sm sm:text-base md:text-xl font-black tracking-tight text-white hover:text-red-500 transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0"
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-600 ring-2 sm:ring-4 ring-red-600/30 shrink-0"></span>
          <span className="whitespace-nowrap">Two Dimension</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#galeria" className="hover:text-white transition-colors">Galeria</a>
          <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
          <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
          <a href="#ficha-tecnica" className="hover:text-white transition-colors">Ficha Técnica</a>
          <a href="#o-que-vem" className="hover:text-white transition-colors">Na Caixa</a>
          <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações</a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            aria-label="Abrir carrinho de compras"
            className="relative p-2.5 text-neutral-200 hover:text-white rounded-lg hover:bg-neutral-900 border border-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-neutral-300" />
            <span className="hidden sm:inline text-xs font-medium">Carrinho</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onBuyNowClick}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-500 active:scale-[0.98] rounded-lg shadow-sm shadow-red-900/40 transition-all cursor-pointer whitespace-nowrap"
          >
            Comprar Agora
          </button>
        </div>
      </div>
    </header>
  );
};
