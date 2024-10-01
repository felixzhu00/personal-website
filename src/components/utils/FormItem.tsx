import React from 'react'

export default function FormItem() {
  return (
    <div className="relative flex-1">
      <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-text-950">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="block h-12 w-full rounded-md"
      />
    </div>
  )
}
