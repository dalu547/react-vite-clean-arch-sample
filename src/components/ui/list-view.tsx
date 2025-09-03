import React from 'react'

type Key = string | number

export interface ListViewProps<T> {
  items: T[] | undefined
  getKey: (item: T, index: number) => Key
  renderItem: (item: T, index: number) => React.ReactNode
  emptyState?: React.ReactNode
  className?: string
}

export function ListView<T>({ items, getKey, renderItem, emptyState, className }: ListViewProps<T>) {
  if (!items || items.length === 0) {
    return (
      <div className={`bg-white rounded-xl border p-4 text-sm text-gray-600 ${className ?? ''}`.trim()}>
        {emptyState ?? 'No items to display'}
      </div>
    )
  }

  return (
    <ul className={`bg-white rounded-xl border divide-y ${className ?? ''}`.trim()}>
      {items.map((item, index) => (
        <li key={getKey(item, index)} className="p-3">
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  )
}

export default ListView
