import React, { useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Plus, Minus, RotateCcw, StickyNote } from 'lucide-react';
import { StaggerText } from '../components/motion';
import { Link } from 'react-router-dom';

export default function Playground() {
  const { gallery } = portfolioData;

  const defaultItems = gallery?.items || [];

  const [scale, setScale] = useState(1);
  const [items, setItems] = useState(defaultItems);

  const [noteText, setNoteText] = useState('');
  const [showNoteModal, setShowNoteModal] = useState(false);
  const maxZIndex = useRef(20);
  const draggingItem = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  const zoomIn = () => setScale(s => Math.min(s + 0.15, 1.8));
  const zoomOut = () => setScale(s => Math.max(s - 0.15, 0.6));
  const resetBoard = () => {
    setScale(1);
    setItems(defaultItems);
  };

  const handlePointerDown = (e, id) => {
    e.stopPropagation();
    maxZIndex.current += 1;
    const item = items.find(it => it.id === id);
    if (!item) return;

    draggingItem.current = id;
    dragOffset.current = {
      x: e.clientX - item.x,
      y: e.clientY - item.y
    };

    setItems(prev => prev.map(it => it.id === id ? { ...it, zIndex: maxZIndex.current } : it));
  };

  const handlePointerMove = (e) => {
    if (!draggingItem.current) return;
    const currentId = draggingItem.current;
    const newX = e.clientX - dragOffset.current.x;
    const newY = e.clientY - dragOffset.current.y;

    setItems(prev => prev.map(it => it.id === currentId ? { ...it, x: newX, y: newY } : it));
  };

  const handlePointerUp = () => {
    draggingItem.current = null;
  };

  const addCustomNote = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;

    maxZIndex.current += 1;
    const newNote = {
      id: `note-${Date.now()}`,
      title: 'Pinned Note',
      note: noteText,
      color: 'var(--ca-yellow)',
      x: 180 + Math.random() * 200,
      y: 150 + Math.random() * 150,
      rotate: (Math.random() * 10 - 5),
      badgeRotate: -4,
      img: null,
      zIndex: maxZIndex.current
    };

    setItems(prev => [...prev, newNote]);
    setNoteText('');
    setShowNoteModal(false);
  };

  return (
    <div className="t-creative-artsy flex-1 flex flex-col">
      <main
        className="ca-grid relative h-[calc(100vh-5rem)] overflow-hidden select-none"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Playground Header Banner */}
        <div className="pointer-events-none absolute left-1/2 top-6 z-40 flex -translate-x-1/2 flex-col items-center text-center">
          <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">
            {gallery?.label || 'playground'}
          </p>
          <span className="mt-2">
            <StaggerText
              text={(gallery?.title || 'JUST FOR FUN').toUpperCase()}
              className="ca-display text-5xl leading-[0.92] tracking-tight text-[var(--ca-ink)] sm:text-7xl select-none"
              stagger={0.04}
              delay={0.05}
            />
          </span>
          <span className="ca-mono mt-1 text-xs uppercase tracking-widest text-[var(--ca-ink)]/60 bg-white/70 px-3 py-1 rounded-full border border-black/10">
            Drag items around & explore the canvas
          </span>
        </div>

        {/* Canvas Area with Zoom Transform */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full transition-transform duration-100 ease-out origin-center"
            style={{ transform: `scale(${scale})` }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                onPointerDown={(e) => handlePointerDown(e, item.id)}
                className="absolute cursor-grab active:cursor-grabbing touch-none select-none"
                style={{
                  left: `${item.x}px`,
                  top: `${item.y}px`,
                  zIndex: item.zIndex,
                  transform: `rotate(${item.rotate}deg)`
                }}
              >
                <div className="relative w-48 sm:w-60 lg:w-72">
                  <div className="overflow-hidden bg-[var(--ca-surface)] shadow-[0_10px_28px_rgba(17,18,18,0.22)] border-2 border-[var(--ca-ink)]/20 p-2.5 bg-white">
                    {item.img ? (
                      <div className={`relative overflow-hidden aspect-[4/5] w-full border border-black/5 ${item.isLogo ? 'bg-[#141416] p-4 flex items-center justify-center' : 'bg-[#ededeb]'}`}>
                        <img
                          src={item.img}
                          alt={item.title}
                          className={`h-full w-full pointer-events-none ${item.isLogo ? 'object-contain' : 'object-cover'}`}
                        />
                      </div>
                    ) : (
                      <div className="p-4 bg-[var(--ca-yellow-soft)] min-h-[140px] flex flex-col justify-between">
                        <p className="ca-hand text-2xl text-[var(--ca-ink)]">{item.note}</p>
                        <span className="ca-mono text-[10px] font-bold uppercase tracking-wider text-black/40">STICKY NOTE</span>
                      </div>
                    )}

                    {item.note && item.img && (
                      <div className="pt-2 pb-1 text-center">
                        <p className="ca-hand text-base sm:text-lg leading-tight text-[var(--ca-ink)]/85 px-1">
                          {item.note}
                        </p>
                        {item.link && (
                          <Link
                            to={item.link}
                            onPointerDown={(e) => e.stopPropagation()}
                            className="ca-mono mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ca-ink)] hover:text-[var(--ca-blue)] underline underline-offset-2"
                          >
                            Explore Build ↗
                          </Link>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Handwritten Badge on Item */}
                  <span
                    className="ca-hand inline-block px-3 py-1.5 leading-snug text-[var(--ca-ink)] shadow-[2px_3px_8px_rgba(17,18,18,0.18)] text-xl sm:text-2xl absolute -left-3 -top-4 max-w-[90%] border border-black/10"
                    style={{
                      backgroundColor: item.color,
                      transform: `rotate(${item.badgeRotate}deg)`
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Controls (Zoom + Reset + Add Note) */}
        <div className="absolute bottom-6 right-6 z-40 flex flex-col gap-2">
          <button
            onClick={zoomIn}
            aria-label="Zoom in"
            title="Zoom in"
            className="ca-mono flex h-11 w-11 items-center justify-center border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] text-xl font-bold text-[var(--ca-ink)] transition-colors hover:bg-[var(--ca-blue)] hover:text-white shadow-[2px_2px_0_var(--ca-ink)]"
          >
            <Plus className="h-5 w-5" />
          </button>
          <button
            onClick={zoomOut}
            aria-label="Zoom out"
            title="Zoom out"
            className="ca-mono flex h-11 w-11 items-center justify-center border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] text-xl font-bold text-[var(--ca-ink)] transition-colors hover:bg-[var(--ca-blue)] hover:text-white shadow-[2px_2px_0_var(--ca-ink)]"
          >
            <Minus className="h-5 w-5" />
          </button>
          <button
            onClick={resetBoard}
            aria-label="Reset board"
            title="Reset board layout"
            className="ca-mono flex h-11 w-11 items-center justify-center border-2 border-[var(--ca-ink)] bg-[var(--ca-surface)] text-xl font-bold text-[var(--ca-ink)] transition-colors hover:bg-[var(--ca-yellow)] shadow-[2px_2px_0_var(--ca-ink)]"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            onClick={() => setShowNoteModal(true)}
            aria-label="Add sticky note"
            title="Add sticky note"
            className="ca-mono flex h-11 w-11 items-center justify-center border-2 border-[var(--ca-ink)] bg-[var(--ca-magenta)] text-white text-xl font-bold transition-colors hover:bg-[var(--ca-yellow)] hover:text-[var(--ca-ink)] shadow-[2px_2px_0_var(--ca-ink)]"
          >
            <StickyNote className="h-4 w-4" />
          </button>
        </div>

        {/* Modal to add sticky note */}
        {showNoteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-sm border-2 border-[var(--ca-ink)] bg-white p-6 shadow-[6px_6px_0_var(--ca-ink)]">
              <h3 className="ca-mono text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)]">
                Pin a Note on Canvas
              </h3>
              <form onSubmit={addCustomNote} className="mt-4">
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Type your thought or reaction..."
                  className="w-full border-2 border-[var(--ca-ink)] p-3 text-sm focus:outline-none"
                  rows={3}
                  autoFocus
                />
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowNoteModal(false)}
                    className="ca-mono border-2 border-[var(--ca-ink)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ca-mono border-2 border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--ca-ink)] shadow-[2px_2px_0_var(--ca-ink)]"
                  >
                    Add Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
