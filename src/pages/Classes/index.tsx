import { useEffect, useState } from "react";
import { getAllClasses, getClassByIndex } from "@services/classes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Classes = () => {
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAllClasses()
      .then((data) => {
        console.log(data);
        setClasses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredClasses = classes.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClassClick = async (index: string) => {
    try {
      const data = await getClassByIndex(index);
      setSelectedClass(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Failed to fetch class details:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto py-8 px-4 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Classes</h1>
            <p className="text-muted-foreground mt-1">
              Explore the character classes of Dungeons & Dragons 5th Edition.
            </p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search classes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading classes...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((c) => (
              <Card
                key={c.index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleClassClick(c.index)}
              >
                <CardHeader>
                  <CardTitle>{c.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Click to view details for {c.name}.
                  </p>
                </CardContent>
              </Card>
            ))}
            {filteredClasses.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">
                  No classes found matching "{search}".
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedClass?.name}</DialogTitle>
            <DialogDescription>
              Hit Die: d{selectedClass?.hit_die}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Proficiencies:</h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {selectedClass?.proficiencies?.map((p: any) => (
                <li key={p.index}>{p.name}</li>
              ))}
            </ul>
            <h4 className="font-semibold mt-4 mb-2">Saving Throws:</h4>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {selectedClass?.saving_throws?.map((st: any) => (
                <li key={st.index}>{st.name}</li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Classes;
