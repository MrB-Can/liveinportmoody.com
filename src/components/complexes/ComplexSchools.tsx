type School = {
  name: string;
  distance: string;
  catchment: string;
  notes: string;
};

type ComplexSchoolsProps = {
  schools: School[];
};

export function ComplexSchools({ schools }: ComplexSchoolsProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl text-deepInlet">Schools and Catchment</h2>
      <p className="mt-2 text-sm text-slateText">Verify current catchment boundaries with School District 43.</p>

      <div className="mt-6 space-y-4">
        {schools.map((school) => (
          <div key={school.name} className="rounded-lg border border-softBorder bg-white p-5">
            <h3 className="font-semibold text-deepInlet">{school.name}</h3>
            <div className="mt-3 space-y-2 text-sm">
              <p><span className="font-medium text-forest">Distance:</span> {school.distance}</p>
              <p><span className="font-medium text-forest">Catchment:</span> {school.catchment}</p>
              <p className="text-slateText">{school.notes}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
